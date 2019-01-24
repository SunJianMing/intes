let pathBase = (module) => import(`@/modules_page/report/${module}`)

const reportPath = [
  {
    path: '/intesReport/:id?',
    component: () => pathBase('intesReport')
  },
  {
    path: '/uricReport/:id?',
    component: () => pathBase('uricReport')
  }
]
export default reportPath
