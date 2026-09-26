import { CheckCircle, Clock, CalendarClock } from 'lucide-react';
import { projects, projectStats } from '../data/siteData';
import type { ProjectStatus as Status } from '../data/siteData';
import { useCountUp } from '../hooks/useCountUp';
import './ProjectStatus.css';

const statusConfig: Record<Status, { label: string; className: string }> = {
  completed: { label: 'Completed', className: 'status--completed' },
  ongoing: { label: 'Ongoing', className: 'status--ongoing' },
  awaited: { label: 'Awaited', className: 'status--awaited' },
};

export function ProjectStatus() {
  const completedCount = projectStats.completed;
  const ongoingCount = projectStats.ongoing;
  const awaitedCount = projectStats.awaited;

  const { count: animatedCompleted, elementRef: completedRef } = useCountUp(completedCount, { duration: 1200 });
  const { count: animatedOngoing, elementRef: ongoingRef } = useCountUp(ongoingCount, { duration: 1200 });
  const { count: animatedAwaited, elementRef: awaitedRef } = useCountUp(awaitedCount, { duration: 1000 });

  return (
    <section id="projects" className="section section--alt project-status">
      <div className="container">
        <div className="reveal">
          <span className="section__eyebrow">Fleet Dispatch & Contracts</span>
          <h2 className="section__title">Transport Operations Status</h2>
          <p className="section__description">
            Live operational status across our active haulage routes, dedicated transport
            contracts, and ongoing corridor supply agreements.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="project-status__stats">
          <div className="stat-card stat-card--completed reveal stagger-1" ref={completedRef}>
            <CheckCircle size={28} />
            <div className="stat-card__info">
              <span className="stat-card__count">{animatedCompleted}</span>
              <span className="stat-card__label">Completed Routes</span>
            </div>
          </div>
          <div className="stat-card stat-card--ongoing reveal stagger-2" ref={ongoingRef}>
            <Clock size={28} />
            <div className="stat-card__info">
              <span className="stat-card__count">{animatedOngoing}</span>
              <span className="stat-card__label">Active Routes</span>
            </div>
          </div>
          <div className="stat-card stat-card--awaited reveal stagger-3" ref={awaitedRef}>
            <CalendarClock size={28} />
            <div className="stat-card__info">
              <span className="stat-card__count">{animatedAwaited}</span>
              <span className="stat-card__label">Awaited Mobilizations</span>
            </div>
          </div>
        </div>

        {/* Project Table */}
        <div className="project-table-wrapper reveal stagger-2">
          <table className="project-table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Location</th>
                <th>Category</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.name}>
                  <td className="project-table__name">{project.name}</td>
                  <td>{project.location}</td>
                  <td>{project.category}</td>
                  <td>
                    <span
                      className={`status-badge ${statusConfig[project.status].className}`}
                    >
                      {statusConfig[project.status].label}
                    </span>
                  </td>
                  <td>
                    {project.progress !== null ? (
                      <div className="progress-cell">
                        <div className="progress-bar">
                          <div
                            className={`progress-bar__fill progress-bar__fill--${project.status} ${statusConfig[project.status].className}`}
                            style={{ width: `${Math.max(0, Math.min(100, project.progress))}%` }}
                          />
                        </div>
                        <span className="progress-text">{project.progress}%</span>
                      </div>
                    ) : (
                      <span className="progress-text">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
