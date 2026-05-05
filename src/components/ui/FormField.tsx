import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from 'react';
import { forwardRef } from 'react';

const fieldBase =
  'w-full bg-white border border-neutral-light rounded px-4 text-sm text-brand-black placeholder:text-neutral-mid focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:outline-none transition-colors';

const errorClasses = 'border-red-500 focus:border-red-500 focus:ring-red-500';

interface FieldWrapperProps {
  label: string;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
}

function FieldWrapper({ label, htmlFor, error, children }: FieldWrapperProps) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={htmlFor}
        className="block pl-4 text-xs font-normal text-neutral-mid"
      >
        {label}
      </label>
      {children}
      {error && <p className="pl-4 text-xs text-red-600">{error}</p>}
    </div>
  );
}

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, ...rest }, ref) => {
    const fieldId = id || `field-${label.toLowerCase().replace(/\s+/g, '-')}`;
    return (
      <FieldWrapper label={label} htmlFor={fieldId} error={error}>
        <input
          ref={ref}
          id={fieldId}
          className={`${fieldBase} h-12 ${error ? errorClasses : ''}`}
          {...rest}
        />
      </FieldWrapper>
    );
  }
);
Input.displayName = 'Input';

interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'className'
> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, id, ...rest }, ref) => {
    const fieldId = id || `field-${label.toLowerCase().replace(/\s+/g, '-')}`;
    return (
      <FieldWrapper label={label} htmlFor={fieldId} error={error}>
        <select
          ref={ref}
          id={fieldId}
          className={`${fieldBase} h-12 appearance-none bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%20fill=%22%23666%22><path%20d=%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22/></svg>')] bg-[length:18px_18px] bg-[right_1rem_center] bg-no-repeat pr-10 ${
            error ? errorClasses : ''
          }`}
          defaultValue=""
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </FieldWrapper>
    );
  }
);
Select.displayName = 'Select';

interface TextareaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'className'
> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, rows = 6, ...rest }, ref) => {
    const fieldId = id || `field-${label.toLowerCase().replace(/\s+/g, '-')}`;
    return (
      <FieldWrapper label={label} htmlFor={fieldId} error={error}>
        <textarea
          ref={ref}
          id={fieldId}
          rows={rows}
          className={`${fieldBase} resize-y py-3 ${error ? errorClasses : ''}`}
          {...rest}
        />
      </FieldWrapper>
    );
  }
);
Textarea.displayName = 'Textarea';
