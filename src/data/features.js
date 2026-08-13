import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';

// Every feature links to a mockup of its real screen in `public/screens/`.
// Swap any file there for an actual device screenshot any time — no code
// changes needed.
const features = [
  {
    icon: AccountBalanceWalletOutlinedIcon,
    title: 'Multiple Wallets',
    description: 'Track cash, bank accounts, and credit cards separately with a clear view of your total balance.',
    image: '/screens/dashboard.svg',
    proNote: 'Free: up to 2 · Pro: Unlimited',
  },
  {
    icon: AddCircleOutlineOutlinedIcon,
    title: 'Quick Transaction Entry',
    description: 'Log expenses, income, transfers, and loans in seconds with a fast, guided entry flow.',
    image: '/screens/add-expense.svg',
  },
  {
    icon: CategoryOutlinedIcon,
    title: 'Smart Categories',
    description: 'Build your own collapsible category tree, with sub-categories for cleaner, more precise reporting.',
    image: '/screens/categories.svg',
  },
  {
    icon: SavingsOutlinedIcon,
    title: 'Envelope Budgeting',
    description: 'Set a spending limit per category and track your progress with real-time budget bars.',
    image: '/screens/budgets.svg',
    proNote: 'Free: view only · Pro: create & manage',
  },
  {
    icon: EventRepeatOutlinedIcon,
    title: 'Recurring Bills',
    description: "Never miss a subscription or bill again — see what's due, paid, or coming up at a glance.",
    image: '/screens/recurring.svg',
    proNote: 'Free: up to 2 · Pro: Unlimited',
  },
  {
    icon: HandshakeOutlinedIcon,
    title: 'Loans & Investments',
    description: 'Keep track of money you lend or borrow, plus capital and profit on your investments.',
    image: '/screens/payees.svg',
  },
  {
    icon: InsightsOutlinedIcon,
    title: 'Visual Analytics',
    description: 'See exactly where your money goes with clear, color-coded spending breakdowns.',
    image: '/screens/statistics.svg',
    proNote: 'Free: top categories · Pro: full breakdown + cash flow trends',
  },
  {
    icon: NotificationsActiveOutlinedIcon,
    title: 'Smart Notifications',
    description: 'Get real-time alerts for upcoming bills, budget limits, and account activity, all in one place.',
    image: '/screens/notifications.svg',
  },
  {
    icon: BoltOutlinedIcon,
    title: 'Automations',
    description: 'Set simple rules — like moving a percentage of every paycheck into a budget or wallet — and let the app handle it from then on.',
    image: '/screens/automations.svg',
  },
];

export default features;
