function Input({ icon: Icon, ...props }) {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-cenetr pl-3 pointer-events-none mt-2">
        <Icon className="size-5 text-gray-300" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border-gray-200 text-white placeholder:text-gray-400 transition duration-200"
      />
    </div>
  );
}

export default Input;
