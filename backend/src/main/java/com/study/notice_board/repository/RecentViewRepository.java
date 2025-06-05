package com.study.notice_board.repository;

import com.study.notice_board.domain.RecentView;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecentViewRepository extends JpaRepository<RecentView, Long> {
}
