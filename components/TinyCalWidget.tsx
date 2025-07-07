export default function TinyCalWidget({ url }: { url: string }) {
  return (
    <div className="w-full h-[600px] overflow-hidden rounded-xl shadow-lg">
      <iframe
        src={url}
        className="w-full h-full border-none"
        loading="lazy"
        title="Booking Calendar"
      />
    </div>
  );
}
