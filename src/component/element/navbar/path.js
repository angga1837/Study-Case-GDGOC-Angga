import Link from "next/link";

export default function PathWeb({ items }) {
  return (
    <nav className="text-sm px-6 border-b-2 border-b-gray-400 text-gray-500">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2">›</span>}

            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
