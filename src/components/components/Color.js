const Color = () => {
  return (
    <div className="bg-white overflow-hidden flex flex-col items-start justify-start p-[120px] text-left text-9xl text-text-primary font-body-large-semibold">
      <div className="flex flex-col items-start justify-start gap-[80px]">
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative leading-[100%] font-semibold">Color</div>
          <div className="w-[400px] flex flex-row items-start justify-start gap-[24px]">
            <div className="flex-1 relative rounded-2xl bg-red-200 h-20" />
            <div className="flex-1 relative rounded-2xl bg-primary-weak h-20" />
            <div className="flex-1 relative rounded-2xl bg-boder h-20" />
            <div className="flex-1 relative rounded-2xl bg-white box-border h-20 border-[1px] border-solid border-boder" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative leading-[100%] font-semibold">
            Text Color
          </div>
          <div className="w-[400px] flex flex-row items-start justify-start gap-[24px]">
            <div className="flex-1 relative rounded-2xl bg-text-primary h-20" />
            <div className="flex-1 relative rounded-2xl bg-text-secondary h-20" />
            <div className="flex-1 relative rounded-2xl bg-text-tertiary h-20" />
            <div className="flex-1 relative rounded-2xl bg-gainsboro-600 h-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
