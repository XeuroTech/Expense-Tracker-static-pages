import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

// The three flagship capabilities that only exist on Pro. AI Smart Add and
// Split Expenses use real device screenshots; Cloud Sync still uses a
// mockup until a real screenshot of that screen is provided.
const proFeatures = [
  {
    icon: AutoAwesomeOutlinedIcon,
    title: 'AI Smart Add',
    description: 'Type or say "Spent $12 on coffee" and Pro fills in the amount, category, and wallet for you.',
    image: '/screens/real/ai-smart-add.jpg',
  },
  {
    icon: CloudSyncOutlinedIcon,
    title: 'Cloud Sync',
    description: 'Your wallets, transactions, and budgets stay backed up and in sync across every device.',
    image: '/screens/cloud-sync.svg',
  },
  {
    icon: GroupsOutlinedIcon,
    title: 'Split Expenses',
    description: 'Add friends and split a bill in seconds — everyone sees exactly who owes what.',
    image: '/screens/real/split-expenses.jpg',
  },
];

export default proFeatures;
