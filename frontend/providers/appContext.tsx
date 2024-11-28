import { useState, createContext, useContext, PropsWithChildren } from "react";

export type Gender = "Male" | "Female" | "Undisclosed";

type Voice = {
  firstName: string;
  lastName: string;
  gender: Gender;
};

const AppContext = createContext<{
  isRecording: boolean;
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;
  voices: Voice[];
  setVoices: React.Dispatch<React.SetStateAction<Voice[]>>;
  alertEnabled: boolean[];
  setAlertEnabled: React.Dispatch<React.SetStateAction<boolean[]>>;
  isVibrating: boolean;
  setIsVibrating: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isRecording: false,
  setIsRecording: () => {},
  voices: [],
  setVoices: () => {},
  alertEnabled: [],
  setAlertEnabled: () => {},
  isVibrating: true,
  setIsVibrating: () => {},
});

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // const [checkedAlerts, setCheckedAlerts] = useState<boolean[]>([true, true, true, true, true, true])
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [voices, setVoices] = useState<Voice[]>([]);
  const [alertEnabled, setAlertEnabled] = useState<boolean[]>(
    new Array(5).fill(true)
  );
  const [isVibrating, setIsVibrating] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isRecording,
        setIsRecording,
        voices,
        setVoices,
        alertEnabled,
        setAlertEnabled,
        isVibrating,
        setIsVibrating,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};