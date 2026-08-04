import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

// The three flagship capabilities that only exist on Pro — each backed by a
// mockup of its real screen in `public/screens/`.
const proFeatures = [
  {
    icon: AutoAwesomeOutlinedIcon,
    title: 'AI Smart Add',
    description: 'Type or say "Spent $12 on coffee" and Pro fills in the amount, category, and wallet for you.',
    image: '/screens/ai-smart-add.svg',
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
    image: '/screens/friends-split.svg',
  },
];

export default proFeatures;
