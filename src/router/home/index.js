let pathBase = (module) => import(`@/modules_page/home/${module}`)
const homePath = [{
  path: '/status/:id?',
  component: () => pathBase('status')
}]
export default homePath
