# Imagen base PHP-FPM
FROM php:8.2-fpm

# Instalar dependencias necesarias
RUN apt-get update && apt-get install -y \
    git unzip libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

# Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Directorio de trabajo
WORKDIR /var/www/html

# Copiar archivos del proyecto (incluye Angular dentro de /public)
COPY . .

# Instalar dependencias de Laravel
RUN composer install

# Permisos a storage y cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Puerto de PHP-FPM
EXPOSE 9000

CMD ["php-fpm"]
