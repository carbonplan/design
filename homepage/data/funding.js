import { Link } from 'theme-ui'

const unrestricted = [
  {
    name: 'Pamela Mensch',
    description: 'Individual',
  },
  {
    name: 'Hampus Jakobsson',
    description: 'Individual',
  },
  {
    name: (
      <span>
        Jason Jacobs +<br />
        Allison Pincus-Jacobs
      </span>
    ),
    description: 'Individual',
  },
  {
    name: (
      <span>
        Colin Rust +<br />
        Jeannie Tseng
      </span>
    ),
    description: 'Individual',
  },
  {
    name: 'Teach a Man to Fish Foundation',
    description: 'Individual',
  },
  {
    name: 'Eutopia Foundation',
    description: 'Individual',
  },
  {
    name: 'Incite labs',
    description: 'Corporate',
  },
]

const projectSpecific = [
  {
    name: 'Carbon 180',
    description: (
      <Link href='https://medium.com/@carbon180/all-star-fellows-join-carbon180-7fdbd00eae3b'>
        Entrepreneur in Residence Fellowship
      </Link>
    ),
  },
  {
    name: 'Stripe',
    description: (
      <Link href='/research/stripe-reports-insights'>
        Negative Emissions Purchase 2020
      </Link>
    ),
  },
  {
    name: 'WattTime',
    description: <Link href='https://www.climatetrace.org'>Climate TRACE</Link>,
  },
  {
    name: 'Generation IM',
    description: 'Guidance on evaluating climate benefits from investments',
  },
  {
    name: 'ClimateWorks',
    description: (
      <Link href='/research/permanence-calculator'>Permanence Calculator</Link>
    ),
  },
  {
    name: (
      <span>
        Lowercase Carbon +<br /> Rio Vista Foundation +<br /> ClimateWorks
      </span>
    ),
    description: <Link href='https://cdrprimer.org'>CDR Primer</Link>,
  },
  {
    name: 'NASA',
    description: (
      <Link href='https://earthdata.nasa.gov/esds/competitive-programs/access/pangeo-ml'>
        Pangeo ML
      </Link>
    ),
  },
  {
    name: 'Microsoft AI for Earth',
    description: 'Forest carbon risk mapping (coming soon)',
  },
]

export { unrestricted, projectSpecific }
