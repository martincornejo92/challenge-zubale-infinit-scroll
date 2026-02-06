# Challenge Zubale - Infinite Marketplace (Performance)

📱 Aplicación mobile desarrollada con **Expo / React Native** como parte de un challenge técnico enfocado en **performance y optimización de listas grandes**.

El objetivo del proyecto es demostrar:
- Render eficiente de **listas con miles de items (10.000+)**
- **Scroll fluido** sin bloqueos del JS thread
- **Filtros y ordenamientos pesados** optimizados
- **Carga de imágenes con cache y lazy loading**
- Buenas prácticas de **arquitectura y performance en React Native**

---

##  Stack

- Expo
- React Native
- TypeScript
- Node.js
- @shopify/flash-list (listas optimizadas)
- expo-image (carga de imágenes con cache)

---

##  Instalación

Clonar el repositorio e instalar dependencias:

```bash
npm install --force
```

##  Ejecución

```bash
npx expo start -c 
```
## 📸 Captura de pantalla

<p align="center">
  <img src="assets/screenshots/1.png" width="170" />
  <img src="assets/screenshots/2.png" width="170" />
  <img src="assets/screenshots/3.png" width="170" />
</p>

## Notas de performance

- Se utiliza FlashList para manejar grandes volúmenes de datos de forma eficiente.

- Las imágenes se cargan con expo-image para aprovechar cache y mejorar tiempos de render.

- Los filtros y ordenamientos se procesan de forma optimizada para evitar bloqueos del hilo principal.

- La UI está pensada para mantener 60fps estables incluso con miles de ítems en pantalla.

## Ecutable

- release/marketplace.apk

## Autor

Lic. Martín Cornejo
Dev Mobile Sr.
Challenge técnico – Infinite Marketplace
