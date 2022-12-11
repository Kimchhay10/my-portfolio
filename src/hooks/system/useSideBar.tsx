import { createContext, useContext, useMemo, useState } from "react";

interface SideBarContextType {
  isClickBar: boolean;
  setClickBar: any;
}

const SideBarContext = createContext<SideBarContextType>(
  {} as SideBarContextType
);

export function SideBarProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [isClickBar, setClickBar] = useState(false);
  const memoedValue = useMemo(
    () => ({ isClickBar, setClickBar }),
    [isClickBar, setClickBar]
  );

  return (
    <SideBarContext.Provider value={memoedValue}>
      {children}
    </SideBarContext.Provider>
  );
}

export default function useSideBar() {
  return useContext(SideBarContext);
}
