// Default to production bucket prefix
export const supabaseProductImagePrefix = process.env
  .NEXT_PUBLIC_SUPABASE_BUCKET_PREFIX
  ? process.env.NEXT_PUBLIC_SUPABASE_BUCKET_PREFIX
  : 'https://gsdqcjtotybgudvdlkvd.supabase.co/storage/v1/object/public/images/';
