import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-green-500 group-[.toaster]:text-black group-[.toaster]:border-0 group-[.toaster]:shadow-lg group-[.toaster]:rounded-lg transition-transform transform group-[.toaster]:hover:scale-105 duration-300",
          description: "group-[.toast]:text-black opacity-90",
          actionButton:
            "group-[.toast]:bg-black group-[.toast]:text-white group-[.toast]:px-4 group-[.toast]:py-2 group-[.toast]:rounded-md hover:bg-gray-800 transition duration-300",
          cancelButton:
            "group-[.toast]:bg-gray-500 group-[.toast]:text-black group-[.toast]:px-4 group-[.toast]:py-2 group-[.toast]:rounded-md hover:bg-gray-600 transition duration-300",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
