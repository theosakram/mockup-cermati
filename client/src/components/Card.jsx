import React from "react";

function Card({ data }) {
  return (
    <>
      <div class="card card-bg">
        <header class="card-header">
          <p class="card-header-title">{data.title}</p>
          <p class="card-header-icon">
            <i class={`fas fa-${data.icon}`}></i>
          </p>
        </header>
        <div class="card-content">
          <div class="content">{data.text}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
