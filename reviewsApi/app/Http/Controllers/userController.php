<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class userController extends Controller
{
    public function store(Request $request)
    {
        //Primero se valida lo que llega osea el request que es lo que llega y se almacena en una
        // variable esto se hace como medida de seguridad
        //para que no se envien datos erroneos o maliciosos a la base de datos
     $validate = $request->validate(
        [
           'u_name' => 'required|string|max:100',
           'u_email' => 'required|string|email|max:150|unique:users',
           'password' => 'required|string|min:8',
        ]);
        // esto es eloquen el Create basicamenre usando el modelo User
        // se crea un nuevo usuario con los datos validados estos datos salen de validate
        // y se guardan en la base de datos
        $user = User::create(
            [
                'u_name' => $validate['u_name'],
                'u_email' => $validate['u_email'],
                // se encripta la contraseña antes de guardarla en la base de datos
                'password' => Hash::make($validate['password']),
            ]);
        // se crea un token para el usuario recien creado
        // esto es para que el usuario pueda autenticarse en la api ese plaintTextToken
        // es el token que se va a enviar al cliente para que lo use en las peticiones
        // a la api y pueda acceder a los recursos protegidos

            $user->tokens()->delete();

            $token = $user->createToken('token')->plainTextToken;
        // se retorna una respuesta json con el codigo de respuesta 201 que significa creado
        // y se envia un mensaje de exito junto con los datos del usuario y el token
            return response()->json(
                [
                    'response_code' => 201,
                    'message' => 'Usuario creado correctamente',
                    'status' =>  "Realizado",
                    'user' => [
                        'name' => $user->u_name,
                        'email' => $user->u_email,
                    ],
                    'token' => $token 
                ]);
    }

    public function login(Request $request)
    {
        try {
            // Se valida el request que llega
            $validate = $request->validate([
                'u_email' => 'required|string|email|max:150',
                'password' => 'required|string|min:8',
            ]);
        } catch (ValidationException $e) {
            return response()->json(
                [
                    'response_code' => 422,
                    'message' => 'Datos de inicio de sesión inválidos v.1',
                    'status' => "Error"
                ], 422);
        }
       $user = User::Where('u_email', $validate['u_email'])->first();
       
       if(!$user || !Hash::check($validate['password'], $user->password))
        {
        return response()->json(
            [
                'response_code' => 401,
                'message' => 'Credenciales incorrectas',
                'status' => "Error"
            ], 401);   
        }

        $user->tokens()->delete();
       
        $token = $user->createToken('token')->plainTextToken;

        return response()->json(
            [
                'response_code' => 200,
                'message' => 'Usuario autenticado correctamente',
                'status' => "Realizado",
                'user' => [
                    'name' => $user->u_name,
                    'email' => $user->u_email,
                ],
                'token' => $token 
            ]);
    }

    public function logout(Request $request)
    {
        // Elimina todos los tokens del usuario autenticado
        $request->user()->tokens()->delete();

        return response()->json(
            [
                'response_code' => 200,
                'message' => 'Sesión cerrada correctamente',
                'status' => "Realizado"
            ]);
    }

}  
