import { Library, Users2 } from 'lucide-react'

export const options = (darkTheme: boolean) =>
  ({
    colors: ['#FABA16'] as any[],
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: '#CCCCCC',
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: '#BBBBBB',
      },
      axisTicks: {
        color: '#BBBBBB',
      },
      categories: [
        '2022-02-27T00:00:00.000Z',
        '2022-02-28T00:00:00.000Z',
        '2022-03-01T00:00:00.000Z',
        '2022-03-02T00:00:00.000Z',
        '2022-03-03T00:00:00.000Z',
        '2022-03-04T00:00:00.000Z',
        '2022-03-05T00:00:00.000Z',
      ],
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: darkTheme ? 'dark' : 'light',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  }) as const

export const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] },
]

export const quikAccess = [
  { title: 'Usuários', icon: Users2, href: '/admin/users' },
  {
    title: 'Cursos',
    icon: Library,
    href: '/admin/courses',
  },
  // {
  //   title: 'Matrículas',
  //   icon: GraduationCap,
  //   href: '/admin/enrollments',
  // },
]

export const welcolmeAdminText = `
    Seja bem-vindo (a) ao painel administrativo do nosso portal de ensino.
    Para dúvidas ou problemas entre em contato com nosso
    <a href="https://api.whatsapp.com/send?phone=5527999021768" target="_blank" rel="noreferrer">
      <strong>suporte técnico</strong>
    </a>.
  `
