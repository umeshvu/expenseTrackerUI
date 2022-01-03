import React from "react";

export default function Loading() {
  return (
    <div className="text-center m-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
