
import { CaseMetric, SupplyChainData, TeamMember } from './types';

export const FAU_COLORS = {
  blue: '#003366',
  red: '#CC0000',
  white: '#FFFFFF'
};

export const METRICS: CaseMetric[] = [
  { name: 'Logistics Optimization', value: 18.5, unit: '%', change: 4.2 },
  { name: 'Lead Time Reduction', value: 12, unit: 'Days', change: -3 },
  { name: 'Cost Per Tonne', value: 42.50, unit: '$', change: -8.1 },
  { name: 'Fleet Utilization', value: 94, unit: '%', change: 12.5 },
];

export const CHART_DATA: SupplyChainData[] = [
  { month: 'Jan', logisticsCost: 4000, efficiency: 70, volume: 2400 },
  { month: 'Feb', logisticsCost: 3800, efficiency: 75, volume: 2600 },
  { month: 'Mar', logisticsCost: 4200, efficiency: 72, volume: 2800 },
  { month: 'Apr', logisticsCost: 3500, efficiency: 82, volume: 3200 },
  { month: 'May', logisticsCost: 3300, efficiency: 88, volume: 3100 },
  { month: 'Jun', logisticsCost: 3100, efficiency: 94, volume: 3500 },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Catalina Garcia',
    role: 'Lead Supply Chain Strategist',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQFpBwJynBn6zg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1619697162708?e=1772668800&v=beta&t=v3cUAfO9bnK03vxMHcKroE8KYG1axdW_QWAre2kz1iY',
    bio: 'Specializing in maritime logistics and global commodity trading.'
  },
  {
    name: 'Melissa McCabe',
    role: 'Data Analyst & Modeler',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQF4Plk2yECGNQ/profile-displayphoto-scale_200_200/B56ZkcWu51J8AY-/0/1757117346182?e=1772668800&v=beta&t=WCef51xmjgNhRZ1qFTYqArXPU-mbjvtYOICFQhjk7l4',
    bio: 'Expert in predictive analytics for demand forecasting in bulk shipping.'
  },
  {
    name: 'Sakshi Maurya',
    role: 'Operations Consultant',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGUNArJeX3X8Q/profile-displayphoto-shrink_200_200/B56ZdcKZXDGoAc-/0/1749597920392?e=1772668800&v=beta&t=menHxuf6_Cojsccj8JeXuk5gF3VoK_sZE6dJgSIgBhc',
    bio: 'FAU Supply Chain Management alum with deep roots in Florida port operations.'
  }
];

export const CASE_STUDY_PROMPT = `
You are the "CMS Consulting Assistant," an AI expert on the supply chain management case study for International Materials Inc (IMI), conducted by CMS Consultants at Florida Atlantic University (FAU).
IMI is a global trader of bulk commodities like cement, gypsum, and bauxite.
The case study focuses on:
1. Optimizing maritime logistics and vessel routing.
2. Reducing lead times between export ports in South America and import terminals in the US.
3. Managing volatile freight costs.
4. Implementing sustainable practices in dry bulk shipping.

Be professional, academic, and insightful. Reference FAU and IMI naturally.
`;
