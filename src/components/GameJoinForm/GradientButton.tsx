interface GradientButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

export const GradientButton = ({
  text,
  icon,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
}: GradientButtonProps) => {
  const base =
    'flex w-full items-center justify-center gap-2 rounded-lg py-3 font-semibold text-white shadow-lg transition-all duration-300';
  const styles =
    variant === 'primary'
      ? 'bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
      : variant === 'secondary'
        ? 'bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
        : variant === 'outline'
          ? 'border border-white/20 bg-white/10 hover:bg-white/20'
          : '';
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles} ${disabled ? 'opacity-40' : ''}`}
    >
      {icon}
      {text}
    </button>
  );
};
