import React from "react";

export const Breadcrumbs: React.FC<{
  items: {
    label: string;
    href?: string;
    icon?: string | React.ReactNode;
  }[];
  separator?: string | React.ReactNode;
}> = ({ items, separator }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="glass px-5 py-3 rounded-xl inline-flex items-center max-w-full overflow-x-auto no-scrollbar shadow-[0_4px_20px_var(--shadow)]"
    >
      <ol className="inline-flex items-center space-x-2 md:space-x-3 whitespace-nowrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <span className="mx-2 text-(--muted) flex items-center justify-center opacity-60">
                  {typeof separator === "string" ? (
                    <i className={`bi bi-${separator}`}></i>
                  ) : separator ? (
                    separator
                  ) : (
                    <i className="bi bi-chevron-right text-xs"></i>
                  )}
                </span>
              )}

              {/* BREADCRUMB ITEM */}
              {isLast || !item.href ? (
                <span
                  className="inline-flex items-center text-sm font-semibold text-(--text) select-none"
                  aria-current="page"
                >
                  {item.icon && (
                    <span className="mr-2 opacity-80 flex items-center">
                      {typeof item.icon === "string" ? (
                        <i className={`bi bi-${item.icon}`}></i>
                      ) : (
                        item.icon
                      )}
                    </span>
                  )}
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="group inline-flex items-center text-sm font-medium text-(--muted) hover:text-(--accent) transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-(--accent) focus:ring-offset-2 focus:ring-offset-(--bg)"
                >
                  {item.icon && (
                    <span className="mr-2 text-(--muted) group-hover:text-(--accent) flex items-center">
                      {typeof item.icon === "string" ? (
                        <i className={`bi bi-${item.icon}`}></i>
                      ) : (
                        item.icon
                      )}
                    </span>
                  )}
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
