/**
 * Auth Service - Centralized auth state management
 * Use this for non-React contexts or global auth operations
 */

class AuthService {
    constructor() {
        this.listeners = [];
    }

    // Get current user from localStorage
    getStoredUser() {
        try {
            const user = localStorage.getItem("user");
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.error("Error parsing stored user:", error);
            localStorage.removeItem("user");
            return null;
        }
    }

    // Check if user is authenticated
    isAuthenticated() {
        return !!this.getStoredUser();
    }

    // Save user to localStorage
    saveUser(userData) {
        if (userData) {
            localStorage.setItem("user", JSON.stringify(userData));
            this.notifyListeners(userData);
        } else {
            this.clearUser();
        }
    }

    // Clear user from localStorage
    clearUser() {
        localStorage.removeItem("user");
        this.notifyListeners(null);
    }

    // Subscribe to auth changes
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    }

    // Notify all listeners of auth changes
    notifyListeners(user) {
        this.listeners.forEach((listener) => listener(user));
    }
}

export const authService = new AuthService();
