



interface InputBoxProps {
  label: string;
  amount: number;
  onAmountChange?: (amount: number) => void;
  onCurrencyChange: (currency: string) => void;
  currencyOptions?: string[];
  selectCurrency?: string;
  amountDisable?: boolean;
  currencyDisable?: boolean;
  className?: string;
}

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}: InputBoxProps) {
  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm flex ${className}`}
    >
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">
          {label}
        </label>

        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange?.(Number(e.target.value))
          }
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">
          Currency Type
        </p>

        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="cursor-pointer rounded-lg bg-white px-4 py-2 font-semibold text-black outline-none"
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
              className="bg-white text-black"
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