import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import { TasksProvider } from "./contexts/TaskContext";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <AppRoutes />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
