package com.study.notice_board.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Table(name = "recent_views",
       uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "post_id"}))
public class RecentView {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;

    @Column(name = "viewed_at", updatable = false)
    private Timestamp viewedAt;

    // getter, setter
}
