import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@fullcalendar/core': require.resolve('@fullcalendar/core'),
//       '@fullcalendar/daygrid': require.resolve('@fullcalendar/daygrid'),
//       // Add other aliases as needed
//     },
//   },
// })

