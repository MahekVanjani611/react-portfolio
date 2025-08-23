import { useCallback } from "react";

export function useToast() {
  const toast = useCallback((message, type = "info") => {
    // Simple browser alert for demonstration
    alert(`${type.toUpperCase()}: ${message}`);
    // Replace with your own toast UI logic if needed
  }, []);

  return { toast };
}