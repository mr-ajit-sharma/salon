import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Reset error state
      clearError: () => set({ error: null }),

      // Sign up new user
      signup: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          const response = await fetch('VITE_SERVER_URL/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
          });
          console.log(response, '                      response 25')
          
          const data = await response.json();
          
          if (!response.ok) {
            throw new Error(data.message || 'Signup failed');
          }
          
          set({
            user: data.user,
            token: data.token,
            isAuthenticated: true,
            isLoading: false,
          });
          
          return data;
        } catch (error) {
          set({ isLoading: false, error: error.message });
          throw error;
        }
      },

      // Sign in existing user
      signin: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          const response = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
          });
          
          const data = await response.json();
          
          if (!response.ok) {
            throw new Error(data.message || 'Authentication failed');
          }
          
          set({
            user: data.user,
            token: data.token,
            isAuthenticated: true,
            isLoading: false,
          });
          
          return data;
        } catch (error) {
          set({ isLoading: false, error: error.message });
          throw error;
        }
      },

      // Sign out user
      signout: async () => {
        set({ isLoading: true });
        try {
          // Optional: Call backend to invalidate token
          await fetch('/api/auth/signout', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${get().token}`,
              'Content-Type': 'application/json',
            },
          });
        } catch (error) {
          console.error('Error during signout:', error);
        } finally {
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        }
      },

      // Get user profile
      getProfile: async () => {
        const { token } = get();
        if (!token) {
          set({ error: 'Not authenticated' });
          return null;
        }

        set({ isLoading: true, error: null });
        try {
          const response = await fetch('/api/users/profile', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          
          const data = await response.json();
          
          if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch profile');
          }
          
          set({
            user: data,
            isLoading: false,
          });
          
          return data;
        } catch (error) {
          set({ isLoading: false, error: error.message });
          throw error;
        }
      },

      // Update user profile
      updateProfile: async (profileData) => {
        const { token, user } = get();
        if (!token) {
          set({ error: 'Not authenticated' });
          return null;
        }

        set({ isLoading: true, error: null });
        try {
          const response = await fetch('/api/users/profile', {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileData),
          });
          
          const data = await response.json();
          
          if (!response.ok) {
            throw new Error(data.message || 'Failed to update profile');
          }
          
          set({
            user: { ...user, ...data },
            isLoading: false,
          });
          
          return data;
        } catch (error) {
          set({ isLoading: false, error: error.message });
          throw error;
        }
      },

      // Book an appointment
      bookAppointment: async (appointmentData) => {
        const { token } = get();
        if (!token) {
          set({ error: 'Not authenticated' });
          return null;
        }

        set({ isLoading: true, error: null });
        try {
          const response = await fetch('/api/appointments', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(appointmentData),
          });
          
          const data = await response.json();
          
          if (!response.ok) {
            throw new Error(data.message || 'Failed to book appointment');
          }
          
          set({ isLoading: false });
          return data;
        } catch (error) {
          set({ isLoading: false, error: error.message });
          throw error;
        }
      },

      // Get user's appointments
      getUserAppointments: async () => {
        const { token } = get();
        if (!token) {
          set({ error: 'Not authenticated' });
          return [];
        }

        set({ isLoading: true, error: null });
        try {
          const response = await fetch('/api/users/appointments', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          
          const data = await response.json();
          
          if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch appointments');
          }
          
          set({ isLoading: false });
          return data;
        } catch (error) {
          set({ isLoading: false, error: error.message });
          throw error;
        }
      },

      // Cancel user appointment
      cancelAppointment: async (appointmentId) => {
        const { token } = get();
        if (!token) {
          set({ error: 'Not authenticated' });
          return null;
        }

        set({ isLoading: true, error: null });
        try {
          const response = await fetch(`/api/appointments/${appointmentId}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          
          if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || 'Failed to cancel appointment');
          }
          
          set({ isLoading: false });
          return true;
        } catch (error) {
          set({ isLoading: false, error: error.message });
          throw error;
        }
      },

      // Fetch services
      fetchServices: async () => {
        set({ isLoading: true, error: null });
        try {
          const response = await fetch('/api/services');
          const data = await response.json();
          
          if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch services');
          }
          
          set({ isLoading: false });
          return data;
        } catch (error) {
          set({ isLoading: false, error: error.message });
          throw error;
        }
      },

      // Admin specific functions (based on user role)
      isAdmin: () => {
        const { user } = get();
        return user && (user.role === 0 || user.role === 1);
      },

      isSuperAdmin: () => {
        const { user } = get();
        return user && user.role === 0;
      }
    }),
    {
      name: 'auth-storage', // name of the item in storage
      partialize: (state) => ({ 
        user: state.user, 
        token: state.token, 
        isAuthenticated: state.isAuthenticated 
      }), // only store these fields
    }
  )
);

export default useAuthStore;