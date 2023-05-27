export const Card = ({ children, style }) => {
  return (
    <div
      className={`${
        style && style
      } bg-white flex-auto shadow-sm rounded-lg p-3`}
    >
      {children}
    </div>
  );
};

export const DataCard = ({ title, children, customStyle }) => {
  return (
    <Card style={customStyle}>
      <h4 className="border-b-2 font-bold text-md text-slate-400 pb-2">
        {title}
      </h4>
      <div>{children}</div>
    </Card>
  );
};
