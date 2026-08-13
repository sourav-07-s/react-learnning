  

interface InputBoxProps {
  label: string;
  amount: number;
  onAmountChange: (amount: number) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  currencyOptions: string[];
}

function InputBox({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions,
}: InputBoxProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="text-sm font-medium text-white/70">
        {label}
      </label>

      <div className="flex items-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
        
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          className="w-full bg-transparent px-4 py-4 text-xl font-semibold text-white outline-none placeholder:text-white/40"
          placeholder="0.00"
        />

        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="cursor-pointer bg-transparent px-4 py-4 font-semibold text-white outline-none"
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
              className="bg-gray-900 text-white"
            >
              {currency.toUpperCase()}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
}

export default InputBox;