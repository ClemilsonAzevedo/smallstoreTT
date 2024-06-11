import { X } from "lucide-react";

interface DrawerProps {
  isCartDrawerOpen: boolean;
  onCartDrawerClose: () => void;
}
export function CartDrawer ({ isCartDrawerOpen, onCartDrawerClose }: DrawerProps) {
  return (
    <div className={`fixed inset-0 flex items-end justify-center z-20 ${isCartDrawerOpen ? '' : 'pointer-events-none'}`}>
      <div className={`fixed inset-0 bg-zinc-950/80 transition-opacity ${isCartDrawerOpen ? 'opacity-50' : 'opacity-0'}`} onClick={onCartDrawerClose} />
      <div className={`bg-zinc-50 w-full p-4 transition-transform transform ${isCartDrawerOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex items-center w-full">
          <button onClick={onCartDrawerClose} className="mb-4 flex justify-end">
            <X size={32} className="hover:text-red-700" />
          </button>
        
        </div>
        <div className="p-2 w-full flex flex-col gap-4">
          <button className="ml-auto flex bg-violet-500 hover:bg-violet-700 text-zinc-200 px-6 py-3 rounded-lg transition">Fazer Pagamento</button>
        </div>
      </div>
    </div>
  );
};
