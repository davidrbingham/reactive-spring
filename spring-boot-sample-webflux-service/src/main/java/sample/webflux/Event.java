package sample.webflux;

import java.time.LocalDateTime;

public class Event {

    public Event(Long aTime, LocalDateTime aDateTime){
        this.time = aTime;
        this.localDateTime = aDateTime;
    }

    private Long time;
    private LocalDateTime localDateTime;

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }
}
