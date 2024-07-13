#! /bin/bash
echo "Removing node_modules/@strapi/admin/dist"
rm -rf node_modules/@strapi/admin/dist
echo "Copying strapi_admin_override_files/admin/distributable"
cp -R strapi_admin_override_files/admin/distributable node_modules/@strapi/admin/
mv node_modules/@strapi/admin/distributable node_modules/@strapi/admin/dist