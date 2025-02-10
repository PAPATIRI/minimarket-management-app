// types for authentication
export interface AuthState {
  token: string | null;
  authenticated: boolean;
  loading: boolean;
}

export interface AuthContextType {
  authState: AuthState;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  checkToken: () => Promise<any>;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

interface DataLoginResponse {
  token: string;
  name: string;
}
export interface LoginResponse {
  success: boolean;
  data: DataLoginResponse;
  message: string;
}

// types for products response
// For the product category (jenis_produk)
interface ProductCategory {
  id: number;
  kategori_produk: string;
}
// For the product location (tempat_produk)
interface ProductLocation {
  id: number;
  kode_rak: string;
}
// For individual product data
export interface Product {
  barcode_produk: string;
  nama_produk: string;
  stok_produk: number;
  harga_beli_produk: number;
  margin: number;
  harga_jual_produk: number;
  jenis_produk: ProductCategory;
  tempat_produk: ProductLocation;
}
// For pagination data
export interface PaginationData<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
// For the complete API response
export interface ProductApiResponse<T> {
  success: boolean;
  data: PaginationData<T>;
  message: string;
}
