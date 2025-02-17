interface SpinnerProps {
  size?: string;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size ="w-10 h-10" }) => {
  return (
    <div className="flex items-center justify-center">
      <div className={`relative ${size}`}>
        <div className="absolute inset-0 w-full h-full border-4 border-transparent rounded-full animate-spin"
        style={{ borderTopColor: '#D70654'}}></div>
        <div className="absolute inset-0 w-full h-full blur-md opacity-30 border-4 border-transparent rounded-full animate-spin"
        style={{ borderTopColor: '#D70654'}}></div>
      </div>
    </div>
  );
}

export default Spinner;