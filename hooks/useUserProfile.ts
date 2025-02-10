import api from "@/utils/api";
import { UserProfile } from "@/utils/types";
import { useEffect, useState } from "react";

export const useUserProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await api.get<UserProfile>("/user");
      setProfile(response.data);
      setError(null);
    } catch (error) {
      setError("failed to fetch profile data");
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return { profile, loading, error, refetchProfile: fetchProfile };
};
