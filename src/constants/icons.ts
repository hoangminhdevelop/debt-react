export const iconList = [
  { emoji: '💰', label: 'Default', value: 'default' },
  { emoji: '👩🏻‍🦰', label: 'Woman with Red Hair', value: 'woman-with-red-hair' },
  { emoji: '🧑🏻‍🦰', label: 'Person with Red Hair', value: 'person-with-red-hair' },
  { emoji: '👵🏻', label: 'Old Woman', value: 'old-woman' },
  { emoji: '👴🏻', label: 'Old Man', value: 'old-man' },
  { emoji: '🧛🏻', label: 'Dracula', value: 'dracula' },
  { emoji: '🐶', label: 'Dog', value: 'dog' },
  { emoji: '🐰', label: 'Rabbit', value: 'rabbit' },
  { emoji: '🦊', label: 'Fox', value: 'fox' },
  { emoji: '🐻', label: 'Bear', value: 'bear' },
  { emoji: '🐼', label: 'Panda', value: 'panda' },
  { emoji: '🦁', label: 'Lion', value: 'lion' },
  { emoji: '🐮', label: 'Cow', value: 'cow' },
  { emoji: '🐷', label: 'Pig', value: 'pig' },
  { emoji: '🐸', label: 'Frog', value: 'frog' },
  { emoji: '🐒', label: 'Monkey', value: 'monkey' },
  { emoji: '🐔', label: 'Chicken', value: 'chicken' },
  { emoji: '🦆', label: 'Duck', value: 'duck' },
  { emoji: '🐝', label: 'Bee', value: 'bee' },
  { emoji: '🦄', label: 'Unicorn', value: 'unicorn' },
];

export const iconOptions = iconList.map((icon) => {
  return {
    label: `${icon.label} ${icon.emoji}`,
    value: icon.value,
  };
});
