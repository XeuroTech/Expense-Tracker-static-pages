import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

const steps = [
  {
    step: '01',
    icon: PersonAddAltOutlinedIcon,
    title: 'Create Account',
    description: 'Sign up in seconds and set up your personal finance profile.',
  },
  {
    step: '02',
    icon: PaidOutlinedIcon,
    title: 'Add Income',
    description: 'Record your income sources so your starting balance is accurate.',
  },
  {
    step: '03',
    icon: ReceiptLongOutlinedIcon,
    title: 'Record Expenses',
    description: 'Log daily expenses and assign them to the right category — or describe them in plain language and let AI Smart Add do it for you on Pro.',
  },
  {
    step: '04',
    icon: SavingsOutlinedIcon,
    title: 'Track Budget',
    description: 'Set monthly budgets and monitor your progress in real time.',
  },
  {
    step: '05',
    icon: AssessmentOutlinedIcon,
    title: 'View Reports',
    description: 'Review clear charts and reports to make smarter money decisions.',
  },
];

export default steps;
