# Imagen base PHP-FPM
FROM php:8.2-fpm

# Instalar dependencias necesarias (git, unzip, PostgreSQL driver, etc.)
RUN apt-get update && apt-get install -y \
    git unzip libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

# Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Definir directorio de trabajo
WORKDIR /var/www/html

# Copiar archivos del proyecto Laravel
COPY . .

# Instalar dependencias de producción de Laravel
RUN composer install

# Dar permisos a storage y cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Puerto expuesto de PHP-FPM
EXPOSE 9000

# Iniciar PHP-FPM (no artisan serve)
CMD ["php-fpm"]
