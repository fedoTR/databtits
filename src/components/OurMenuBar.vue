<template>
    <div>
        <OurMenuBar :model="items">
            <template #start>
                <img alt="Vue logo" src="\databits\public\favicon.ico">
            </template>
            <template #item="{item}">
                <a to="/about">{{item.label}}</a>
            </template>
            <template #end>
                <p>Hola</p>
            </template>
        </OurMenuBar>
    </div>  
    <div>
        <a href="/about"><p>{{item.label}}</p></a>
    </div>
</template>

<script>

export default {
    data() {
        return {
            items: [
                {
                    label: 'Algoritmos simples',
                    icon: 'pi pi-fw pi-desktop',
                    url: '/about',
                    items: [
                        {
                            label: 'Introduccion'
                        },
                        {
                            label: 'Pseudocódigo'
                        },
                        {
                            label: 'Variables'
                        },
                        {
                            label: 'Constantes'
                        },
                        {
                            label: 'Flujo'
                        },
                        {
                            label: 'Representacion gráfica'
                        }
                    ]
                },
                {
                    label: 'Complejidad computacional',
                    icon: 'pi pi-fw pi-desktop',
                    items: [
                        {
                            label: 'Análisis y diseño'
                        },
                        {
                            label: 'Naturaleza de los problemas'
                        },
                        {
                            label: 'Implementaciones'
                        },
                        {
                            label: 'Notación de complejidad'
                        },
                        {
                            label: 'Aplicaciones y ejemplos'
                        }
                    ]
                },
                {
                    label: 'Algoritmos recursivos',
                    icon: 'pi pi-fw pi-desktop',
                    items: [
                        {
                            label: 'Definicion'
                        },
                        {
                            label: 'Diseño y análisis'
                        },
                        {
                            label: 'Pilas'
                        },
                        {
                            label: 'Colas'
                        },
                        {
                            label: 'Listas'
                        }
                    ]
                },
                {
                    label: 'Ordenamiento y búsqueda',
                    icon: 'pi pi-fw pi-desktop',
                    items: [
                        {
                            label: 'Algoritmos de ordenamiento'
                        },
                        {
                            label: 'Algoritmos de búsquedas'
                        },
                        {
                            label: 'Implementaciones'
                        }
                    ]
                },
                {
                    label: 'Recorridos',
                    icon: 'pi pi-fw pi-desktop',
                    items: [
                        {
                            label: 'Definición'
                        },
                        {
                            label: 'Árboles'
                        },
                        {
                            label: 'Grafos'
                        },
                        {
                            label: 'Búsqueda en profundidad'
                        },
                        {
                            label: 'Búsqueda en anchura'
                        }
                    ]
                }
            ]
        }
    }
};
</script>