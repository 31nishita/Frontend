import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import PostCard from "../components/PostCard";
import { supabase } from "../lib/supabaseClient";
import { posts as samplePosts } from "../data/posts";
import Link from 'next/link';


export default function Home() {
  const [posts, setPosts] = useState([]);   
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });
debugger
      if (error) {
        console.error("Error fetching posts:", error.message);
        setPosts([]);
      } else {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <Layout title="Home - Elegance Blog">
      <Hero />
      <header
        className="hero p-5 rounded mb-5"
        style={{
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVte2PsblIgaNYk1fEVXTpefFtj1IiWCg69wFfQ8xy1r3CyOvr4qZPU6xrgp4ACsMiVQ&usqp=CAU",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#1f1f1f",
        }}
      >
        <div
          className="container py-5"
          style={{ background: "rgba(255,255,255,0.6)", borderRadius: 12 }}
        >
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 46 }}>
            Elegant Jewelry & Stories
          </h1>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 18 }}>
            Curated tips, craftsmanship, and new collections.
          </p>
        </div>
      </header>

      <div className="row">
        <div className="col-md-8">
          {loading ? (
            <p>Loading posts… ⏳</p>
          ) : posts.length > 0 ? (
            posts.map((p) => <PostCard key={p.id} post={p} />)
          ) : (
            <p>No posts found 🕊️</p>
          )}
        </div>

        <aside className="col-md-4">
          <div className="p-4 mb-3 bg-light rounded" id="about">
            <h4 style={{ fontFamily: "Playfair Display, serif" }}>About</h4>
            <p style={{ fontFamily: "Poppins, sans-serif" }}>
              A refined blog focusing on jewelry design and styling.
            </p>
          </div>
        </aside>
      </div>
    </Layout>
  );
}
