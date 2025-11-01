interface TextInputProps {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  centered?: boolean;
  color?: 'blue' | 'yellow';
}

export const TextInput = ({
  label,
  icon,
  value,
  onChange,
  placeholder,
  maxLength,
  centered = false,
  color = 'yellow',
}: TextInputProps) => {
  const ringColor =
    color === 'blue' ? 'focus:ring-blue-400' : 'focus:ring-purple-400';
  return (
    <div className='space-y-2'>
      <label className='flex items-center gap-2 text-base font-semibold text-white'>
        {icon}
        {label}
      </label>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/50 focus:border-transparent focus:ring-2 ${ringColor} focus:outline-none ${
          centered ? 'text-center font-mono tracking-widest' : ''
        }`}
      />
    </div>
  );
};
