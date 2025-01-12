export default function ComponentsShow() {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] h-full">
        <div>
          <button className="btn btn-primary w-full h-full">Primary</button>
        </div>

        <div>
          <button className="btn btn-secondary w-full h-full">Secondary</button>
        </div>

        <div>
          <button className="btn btn-accent w-full h-full">Accent</button>
        </div>

        <div>
          <button className="btn btn-neutral w-full h-full">Neutral</button>
        </div>

        <div>
          <button className="btn btn-info w-full h-full">Info</button>
        </div>

        <div>
          <button className="btn btn-success w-full h-full">Success</button>
        </div>

        <div>
          <button className="btn btn-warning w-full h-full">Warning</button>
        </div>

        <div>
          <button className="btn btn-error w-full  h-full">Error</button>
        </div>
      </div>
    </div>
  );
}
