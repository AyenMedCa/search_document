#  Sistema de Búsqueda de Documentos Jurídicos

Este proyecto es una prueba técnica  enfocada en la **interfaz de búsqueda de documentos jurídicos**.  
Se implementó en **React** utilizando **Create React App**, con datos simulados (mock data) para probar la funcionalidad.

---

## Instrucciones para correr el proyecto

1. Clona este repositorio:
```bash
git clone https://github.com/AyenMedCa/search_document
```

2. Entrar en la carpeta del proyecto:
```bash
cd search_document
```

3. Instalar las dependencias:
```bash
npm install
```

4. Ejecutar el proyecto:
```bash
npm start
```

---

## Decisiones de diseño relevantes

- Interfaz limpia y clara: se priorizó la jerarquía visual, la tipografía y los espacios entre elementos.

- Responsive: la página y los formularios funcionan correctamente en móviles y escritorio.

- Estados de la interfaz: se manejan explícitamente:

  - Estado inicial (sin búsqueda)

  - Estado de carga (con spinner)

  - Estado con resultados

  - Estado sin resultados (mensaje centrado)

  - Estado de error simulado (modal de SweetAlert)

 - Botones e interacción: todos los botones cambian de color al pasar el cursor (hover) para mejorar UX.

- Mock data: se usan datos simulados para mostrar los resultados de búsqueda sin backend real.

- Filtros: se implementan filtros por título, fecha, tipo de documento y entidad.

---
## Uso de IA

Se utilizó ChatGPT para:

- Asesorar en la estructura del proyecto y la organización de estilos CSS

- Creación de README

- Volver responsive el sitio web

