import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import { supabase } from "../../lib/supabaseClient";

export default function Post({ post }) {
  if (!post) return <Layout>Post not found</Layout>;

  return (
    <Layout title={post.title}>
      <div className="container my-5" style={{ maxWidth: "800px" }}>
        {/* Title + date */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.8rem",
              textAlign: "center",
              marginBottom: "0.5rem",
            }}
          >
            {post.title}
          </h1>
          <p
            className="text-muted text-center"
            style={{
              fontFamily: "Poppins, sans-serif",
              marginBottom: "2rem",
            }}
          >
            {new Date(post.created_at).toLocaleDateString()}
          </p>
        </motion.div>

        {/* Main Image */}
        {post.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="img-fluid rounded mb-4 shadow"
              style={{
                maxHeight: "480px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "1.1rem",
              lineHeight: "1.9",
              color: "#333",
              whiteSpace: "pre-line",
            }}
          >
            {post.content}
          </div>
        </motion.div>

        {/* Gallery Section */}
        {post.gallery_images && post.gallery_images.length > 0 && (
          <motion.div
            className="mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              More Photos
            </h3>
            <div
              className="row"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {post.gallery_images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`Gallery ${i}`}
                  className="img-fluid rounded"
                  style={{
                    height: "240px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}

// --- Static Paths ---
export async function getStaticPaths() {
  const { data } = await supabase.from("blogs").select("id");
  const paths =
    data?.map((post) => ({ params: { id: post.id.toString() } })) || [];
  return { paths, fallback: "blocking" };
}

// --- Static Props ---
export async function getStaticProps({ params }) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !data) return { notFound: true };

  return { props: { post: data }, revalidate: 10 };
}
