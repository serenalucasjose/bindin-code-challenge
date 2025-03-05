<template>
    <div class="min-h-screen bg-white px-4 dark:bg-gray-900 pt-5">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div>
                    <ul class="space-y-1">
                        <li>
                            <nuxt-link to="/" exact-active-class="active-link"
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                Home
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/polls/create" exact-active-class="active-link"
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                Crear encuesta
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/polls/list" exact-active-class="active-link"
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                Encuestas
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/forms/create" exact-active-class="active-link"
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                Nuevo formulario
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/forms/list" exact-active-class="active-link"
                                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                Formularios
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="lg:col-span-2">
                    <Alert />
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.active-link {
    @apply bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white;
}
</style>