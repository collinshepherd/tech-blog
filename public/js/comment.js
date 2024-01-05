const commentHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector("#comment-desc").value.trim();

  const post_id = window.location.pathname.split("/").pop();

  if (text) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "POST",
      body: JSON.stringify({ text, post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert("Failed to create a comment.");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", commentHandler);
