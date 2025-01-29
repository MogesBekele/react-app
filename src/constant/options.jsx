export const selectTravelOptions = [
  {
    id: 1,
    title: 'Just me',
    desc: 'I am traveling alone',
    icons: '👤',
    people: 1
  },
  {
    id: 2,
    title: 'A couple',
    desc: 'I am traveling with my partner',
    icons: '👫',
    people: '2 people'
  },
  {
    id: 3,
    title: 'Family',
    desc: 'I am traveling with my family',
    icons: '👨‍👩‍👧‍👦',
    people: '4 people'
  },
  {
    id: 4,
    title: 'Group',
    desc: 'I am traveling with a group of friends',
    icons: '👨‍👩‍👧‍👦',
    people: '4+ people'
  }
];

export const selectBudgetOptions = [
  {
    id: 1,
    title: 'Budget',
    desc: 'I am looking for budget-friendly options',
    icons: '💵',
    budget: 'Low'
  },
  {
    id: 2,
    title: 'Mid-range',
    desc: 'I am looking for mid-range options',
    icons: '💰',
    budget: 'Mid'
  },
  {
    id: 3,
    title: 'Luxury',
    desc: 'I am looking for luxury options',
    icons: '💎',
    budget: 'High'
  },
  {
    id: 4,
    title: 'No Budget',
    desc: 'I have no budget constraints',
    icons: '🤑',
    budget: 'Unlimited'
  }
];

export const AI_PROMPT = 'GENERATE TRAVEL PLAN FOR LOCATION: {location}';