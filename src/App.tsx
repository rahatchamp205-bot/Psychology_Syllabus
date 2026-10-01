import React, { useState, useEffect } from 'react';
import {
  NavSection,
  Course,
  CourseStatus,
  ReadingStatus,
  UserDegreeState,
  UserNote
} from './types';
import { loadUserDegreeState, saveUserDegreeState } from './utils/storage';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { YearView } from './components/YearView';
import { PsychopathologyView } from './components/PsychopathologyView';
import { ResearchStatsLabView } from './components/ResearchStatsLabView';
import { ReplicationTrackerView } from './components/ReplicationTrackerView';
import { ReadingBankView } from './components/ReadingBankView';
import { ActiveRecallView } from './components/ActiveRecallView';
import { StudyPlannerView } from './components/StudyPlannerView';
import { NotebookView } from './components/NotebookView';
import { CourseModal } from './components/CourseModal';
import { SearchModal } from './components/SearchModal';
import { ProgressDataModal } from './components/ProgressDataModal';
import { Menu } from 'lucide-react';

export default function App() {
  const [degreeState, setDegreeState] = useState<UserDegreeState>(() => loadUserDegreeState());
  const [activeSection, setActiveSection] = useState<NavSection>('dashboard');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dataModalOpen, setDataModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-save state to localStorage whenever it changes
  useEffect(() => {
    saveUserDegreeState(degreeState);
  }, [degreeState]);

  // Handlers for state updates
  const handleUpdateCourseStatus = (courseId: string, status: CourseStatus) => {
    setDegreeState((prev) => ({
      ...prev,
      courseProgress: {
        ...prev.courseProgress,
        [courseId]: {
          ...(prev.courseProgress[courseId] || { completedUnits: [], notes: '' }),
          status
        }
      }
    }));
  };

  const handleUpdateReadingStatus = (itemId: string, status: ReadingStatus) => {
    setDegreeState((prev) => ({
      ...prev,
      readingStatus: {
        ...prev.readingStatus,
        [itemId]: status
      }
    }));
  };

  const handleUpdateAssignmentStatus = (asgId: string, completed: boolean) => {
    setDegreeState((prev) => ({
      ...prev,
      assignmentStatus: {
        ...prev.assignmentStatus,
        [asgId]: completed
      }
    }));
  };

  const handleSaveCourseNotes = (courseCode: string, notes: string) => {
    // Find course ID by code
    const courseId = Object.keys(degreeState.courseProgress).find(id => id.includes(courseCode.toLowerCase().replace(' ', ''))) || courseCode.toLowerCase().replace(' ', '-');
    setDegreeState((prev) => ({
      ...prev,
      courseProgress: {
        ...prev.courseProgress,
        [courseId]: {
          ...(prev.courseProgress[courseId] || { completedUnits: [], status: 'in-progress' }),
          notes
        }
      }
    }));
  };

  const handleUpdateNotes = (notes: UserNote[]) => {
    setDegreeState((prev) => ({
      ...prev,
      notes
    }));
  };

  const handleRecordQuizScore = (questionId: string, score: number) => {
    setDegreeState((prev) => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [questionId]: score
      }
    }));
  };

  const handleMarkCoreTaskCompleted = (courseCode: string, taskDesc: string) => {
    // Add an automated log note
    const newNote: UserNote = {
      id: `task-log-${Date.now()}`,
      title: `Study Session: ${courseCode}`,
      content: `# Daily Study Log\n\n* ${taskDesc}\n* Completed at: ${new Date().toLocaleString()}\n* Retrieval verification passed.`,
      courseCode,
      updatedAt: new Date().toISOString()
    };
    setDegreeState((prev) => ({
      ...prev,
      notes: [newNote, ...(prev.notes || [])]
    }));
  };

  const handleSelectSection = (section: NavSection) => {
    if (section === 'degree-progress') {
      setDataModalOpen(true);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased">
      {/* Top Header */}
      <Header
        degreeState={degreeState}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenPlanner={() => setActiveSection('study-planner')}
        onOpenDataModal={() => setDataModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Framework Layout with Sidebar */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Left Sidebar Navigation */}
        <Sidebar
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
          mobileOpen={mobileMenuOpen}
          setMobileOpen={setMobileMenuOpen}
        />

        {/* Main Content Area (offset by 288px on desktop for sidebar) */}
        <main className="flex-1 lg:pl-72 p-4 sm:p-8 min-w-0">
          {/* Mobile Menu Trigger Bar */}
          <div className="lg:hidden mb-4 flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-2 text-xs font-semibold text-slate-800"
            >
              <Menu className="w-5 h-5 text-slate-600" />
              <span>Curriculum Menu</span>
            </button>
            <span className="text-[11px] font-mono text-slate-500 capitalize">
              {activeSection.replace(/-/g, ' ')}
            </span>
          </div>

          {/* Active View Router */}
          {activeSection === 'dashboard' && (
            <DashboardView
              degreeState={degreeState}
              onSelectCourse={(course) => setSelectedCourse(course)}
              onNavigateSection={(section) => setActiveSection(section)}
              onOpenPlanner={() => setActiveSection('study-planner')}
            />
          )}

          {activeSection === 'year-1' && (
            <YearView
              year={1}
              degreeState={degreeState}
              onSelectCourse={(course) => setSelectedCourse(course)}
              onUpdateCourseStatus={handleUpdateCourseStatus}
            />
          )}

          {activeSection === 'year-2' && (
            <YearView
              year={2}
              degreeState={degreeState}
              onSelectCourse={(course) => setSelectedCourse(course)}
              onUpdateCourseStatus={handleUpdateCourseStatus}
            />
          )}

          {activeSection === 'year-3' && (
            <YearView
              year={3}
              degreeState={degreeState}
              onSelectCourse={(course) => setSelectedCourse(course)}
              onUpdateCourseStatus={handleUpdateCourseStatus}
            />
          )}

          {activeSection === 'year-4' && (
            <YearView
              year={4}
              degreeState={degreeState}
              onSelectCourse={(course) => setSelectedCourse(course)}
              onUpdateCourseStatus={handleUpdateCourseStatus}
            />
          )}

          {activeSection === 'psychopathology' && (
            <PsychopathologyView
              onSelectCourse={(course) => setSelectedCourse(course)}
            />
          )}

          {activeSection === 'research-stats' && (
            <ResearchStatsLabView />
          )}

          {activeSection === 'replication-tracker' && (
            <ReplicationTrackerView />
          )}

          {activeSection === 'reading-bank' && (
            <ReadingBankView
              degreeState={degreeState}
              onUpdateReadingStatus={handleUpdateReadingStatus}
            />
          )}

          {activeSection === 'active-recall' && (
            <ActiveRecallView
              degreeState={degreeState}
              onRecordQuizScore={handleRecordQuizScore}
            />
          )}

          {activeSection === 'study-planner' && (
            <StudyPlannerView
              degreeState={degreeState}
              onMarkCoreTaskCompleted={handleMarkCoreTaskCompleted}
            />
          )}

          {activeSection === 'notebook' && (
            <NotebookView
              degreeState={degreeState}
              onUpdateNotes={handleUpdateNotes}
            />
          )}
        </main>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          degreeState={degreeState}
          onUpdateCourseStatus={handleUpdateCourseStatus}
          onUpdateReadingStatus={handleUpdateReadingStatus}
          onUpdateAssignmentStatus={handleUpdateAssignmentStatus}
          onSaveCourseNotes={handleSaveCourseNotes}
        />
      )}

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectCourse={(course) => setSelectedCourse(course)}
      />

      {/* Progress & Data Management Modal */}
      <ProgressDataModal
        isOpen={dataModalOpen}
        onClose={() => setDataModalOpen(false)}
        degreeState={degreeState}
        onStateUpdated={(newState) => setDegreeState(newState)}
      />
    </div>
  );
}
